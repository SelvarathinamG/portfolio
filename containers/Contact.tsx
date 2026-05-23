import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { contact, socialLinks } from "../portfolio";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const formatTimestampIST = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(date);
  const lookup = (type: string) => parts.find(part => part.type === type)?.value || "";

  const day = lookup("day");
  const month = lookup("month");
  const year = lookup("year");
  const weekday = lookup("weekday");
  const hour = lookup("hour");
  const minute = lookup("minute");
  const second = lookup("second");
  const dayPeriod = lookup("dayPeriod").toLowerCase();

  return `${weekday} ${day} ${month}, ${year} at ${hour}:${minute}:${second} ${dayPeriod}`;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "test_public_key");
  }, []);

  useEffect(() => {
    if (!feedback) return;

    const timeout = window.setTimeout(() => {
      setFeedback(null);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [feedback]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(previousState => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userEmail = socialLinks.email.replace(/^mailto:/, "");

      if (!serviceID || !templateID) {
        // Fallback: open mailto if EmailJS not configured
        const subject = encodeURIComponent(formData.subject || `New Contact Form Submission`);
        const body = encodeURIComponent(
          `New Contact Form Submission\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Timestamp (IST): ${formatTimestampIST()}\n\n` +
            `---\n` +
            `This email was sent from your portfolio contact form`
        );
        window.location.href = `mailto:${userEmail}?subject=${subject}&body=${body}`;
        return;
      }

      // Basic client-side validation
      if (!formData.name || !formData.email || !formData.message) {
        setFeedback({ type: "error", message: "Please enter your name, email, and a message before sending." });
        setIsLoading(false);
        return;
      }

      const timestampIST = formatTimestampIST();

      const templateParams = {
        to_email: userEmail,
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject || "New Contact Form Submission",
        message: formData.message,
        email_content:
          `New Contact Form Submission\n\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}\n\n` +
          `Timestamp (IST): ${timestampIST}\n\n` +
          `---\n` +
          `This email was sent from your portfolio contact form`,
        formatted_message:
          `New Contact Form Submission\n\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}\n\n` +
          `Timestamp (IST): ${timestampIST}\n\n` +
          `---\n` +
          `This email was sent from your portfolio contact form`,
        timestamp_ist: timestampIST,
        sender_name: formData.name,
        sender_email: formData.email,
      };

      console.debug("EmailJS sending with params:", templateParams);

      const response = await emailjs.send(serviceID, templateID, templateParams);

      if (response && response.status === 200) {
        setFeedback({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData(initialState);
      } else {
        console.warn("EmailJS unexpected response:", response);
        setFeedback({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFeedback({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Fade duration={2000} triggerOnce>
      <section className="section" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
        <Container style={{ maxWidth: 1140 }}>
          <div className="d-flex p-3 align-items-center">
            <div>
              <div
                className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info"
                style={{ width: 72, height: 72 }}
              >
                <i className="ni ni-email-83 text-info" style={{ fontSize: "1.5rem" }} />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info" style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)" }}>
                {contact.title}
              </h4>
            </div>
          </div>
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardBody className="p-lg-5">
              <Row className="align-items-stretch">
                <Col lg="5" className="mb-4 mb-lg-0">
                  <div className="h-100 bg-gradient-info text-white rounded-lg p-4 p-lg-5">
                    <h3 className="text-white" style={{ fontSize: "1.7rem" }}>
                      Let’s build something useful.
                    </h3>
                    <p className="mt-3 text-white opacity-8" style={{ fontSize: "0.98rem", lineHeight: 1.7 }}>
                      {contact.description}
                    </p>
                    <div className="mt-4">
                      <p className="mb-2 font-weight-bold" style={{ fontSize: "1.5rem" }}>
                        Email
                       </p>
                      <a className="text-white" href={socialLinks.email} style={{ fontSize: "0.8rem" }}>
                        {contact.emailLabel}
                      </a>
                     
                    </div>
                    <div className="mt-4">
                      <p className="mb-2 font-weight-bold" style={{ fontSize: "1.5rem" }}>
                        Phone
                      </p>
                      <a
                        href="tel:+919025624338"
                        className="text-white"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem" }}
                      >
                        <i className="fa fa-phone" />
                        {" "}+91 9025624338
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg="7">
                  <Form onSubmit={handleSubmit}>
                    {feedback ? (
                      <div
                        style={{
                          marginBottom: "1rem",
                          padding: "0.9rem 1rem",
                          borderRadius: 12,
                          backgroundColor: feedback.type === "success" ? "#ecfdf3" : "#fef2f2",
                          color: feedback.type === "success" ? "#166534" : "#991b1b",
                          border: `1px solid ${feedback.type === "success" ? "#bbf7d0" : "#fecaca"}`,
                          fontSize: "0.95rem",
                          fontWeight: 600,
                        }}
                      >
                        {feedback.message}
                      </div>
                    ) : null}
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="contact-name" className="form-control-label">
                            Your Name
                          </label>
                          <Input
                            id="contact-name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="contact-email" className="form-control-label">
                            Email Address
                          </label>
                          <Input
                            id="contact-email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label htmlFor="contact-subject" className="form-control-label">
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        placeholder="Enter subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="contact-message" className="form-control-label">
                        Message
                      </label>
                      <Input
                        id="contact-message"
                        name="message"
                        placeholder="Write your message here"
                        type="textarea"
                        rows="8"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button color="info" type="submit" size="lg" className="mt-2" disabled={isLoading}>
                      
                      {isLoading ? "Sending..." : "Send Message "}
                      <span className="btn-inner--icon mr-2">
                        <i className="fa fa-paper-plane text-white" />
                      </span>
                    </Button>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    </Fade>
  );
};

export default Contact;
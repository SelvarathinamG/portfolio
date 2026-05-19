import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { contact, socialLinks } from "../portfolio";
import SocialLinks from "../components/SocialLinks";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "test_public_key");
  }, []);

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
        const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${userEmail}?subject=${subject}&body=${body}`;
        return;
      }

      const response = await emailjs.send(serviceID, templateID, {
        to_email: userEmail,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      if (response.status === 200) {
        alert("✓ Message sent successfully! I'll get back to you soon.");
        setFormData(initialState);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fade bottom duration={2000}>
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-email-83 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">{contact.title}</h4>
            </div>
          </div>
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardBody className="p-lg-5">
              <Row className="align-items-stretch">
                <Col lg="5" className="mb-4 mb-lg-0">
                  <div className="h-100 bg-gradient-info text-white rounded-lg p-4 p-lg-5">
                    <h3 className="text-white">Let’s build something useful.</h3>
                    <p className="mt-3 text-white opacity-8">{contact.description}</p>
                    <div className="mt-4">
                      <p className="mb-2 font-weight-bold">Email</p>
                      <a className="text-white" href={socialLinks.email}>
                        {contact.emailLabel}
                      </a>
                    </div>
                    <div className="mt-4">
                      <p className="mb-2 font-weight-bold">Social Links</p>
                      <SocialLinks />
                    </div>
                  </div>
                </Col>
                <Col lg="7">
                  <Form onSubmit={handleSubmit}>
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
                      <label htmlFor="contact-message" className="form-control-label">
                        Message
                      </label>
                      <Input
                        id="contact-message"
                        name="message"
                        placeholder="Write your message here"
                        type="textarea"
                        rows="7"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button color="info" type="submit" size="lg" className="mt-2" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Me a Message"}
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
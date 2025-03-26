import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  whatsappNumber?: string;
  ctaText?: string;
  formSubmitText?: string;
}

const ContactSection = ({
  title = "Let's Work Together",
  subtitle = "Have a project in mind? Fill out the form below or contact me directly via WhatsApp.",
  whatsappNumber = "+1234567890",
  ctaText = "Start a Conversation",
  formSubmitText = "Send Message",
}: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=8879502977&text&type=phone_number&app_absent=0",
    );
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your email address"
                            {...field}
                            className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            {...field}
                            className="min-h-[120px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      formSubmitText
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* CTA and WhatsApp */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-black text-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">{ctaText}</h3>
              <p className="mb-6 text-gray-300">
                Ready to bring your vision to life? I'm excited to collaborate
                on your next project and create something amazing together.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Quick response time</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Tailored design solutions</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Collaborative approach</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

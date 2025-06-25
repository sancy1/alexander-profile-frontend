// hooks/use-newsletter-subscription.js
import { useState, useCallback } from "react";

export const useNewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localMessage, setLocalMessage] = useState({
    type: "", // 'success' | 'error' | ''
    text: "",
  });

  // Clear message after a set duration
  const clearMessage = useCallback((duration = 5000) => {
    setTimeout(() => setLocalMessage({ type: "", text: "" }), duration);
  }, []);

  const handleSubscribe = useCallback(
    async (e) => {
      e.preventDefault();
      setLocalMessage({ type: "", text: "" }); // Clear any previous messages
      setIsSubmitting(true);

      // Basic client-side email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setLocalMessage({
          type: "error",
          text: "Please enter a valid email address.",
        });
        setIsSubmitting(false);
        clearMessage(); // Default 5s for validation errors
        return;
      }

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      if (!backendUrl) {
        setLocalMessage({
          type: "error",
          text: "Configuration error: Backend API URL is not configured. Please contact support.",
        });
        setIsSubmitting(false);
        clearMessage(); // Default 5s for config errors
        return;
      }

      try {
        const response = await fetch(`${backendUrl}/api/newsletter/subscribe/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setLocalMessage({
            type: "success",
            text: "Thank you for subscribing! A confirmation email has been sent to your inbox.",
          });
          setEmail(""); // Clear the email input
          clearMessage(); // Default 5s for success messages
        } else {
          const errorData = await response.json();
          const backendErrorMessage =
            errorData.error || errorData.message || "An unexpected error occurred.";

          let displayMessage = backendErrorMessage;

          const lowerCaseErrorMessage = backendErrorMessage.toLowerCase();
          if (
            lowerCaseErrorMessage.includes("already subscribed") ||
            lowerCaseErrorMessage.includes("email already exists") ||
            lowerCaseErrorMessage.includes("duplicate entry")
          ) {
            displayMessage =
              "This email address is already subscribed to our newsletter. Thank you!";
          }

          setLocalMessage({
            type: "error",
            text: displayMessage,
          });
          clearMessage(8000); // 8s for error messages
        }
      } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        setLocalMessage({
          type: "error",
          text: "Network Error: Could not connect to the server. Please check your internet connection and try again.",
        });
        clearMessage(8000); // 8s for network errors
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, clearMessage] // Depend on email and clearMessage
  );

  return {
    email,
    setEmail,
    isSubmitting,
    localMessage,
    handleSubscribe,
  };
};
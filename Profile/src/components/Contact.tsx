import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setLoading(true)

    try {
      await emailjs.sendForm(
        "service_shekhar_sen",
        "template_shekhar_sen",
        formRef.current,
        "jYcDcXjZDOzcnP-tL"
      )

      alert("Message sent successfully!")
      formRef.current.reset()

    } catch (error) {
      alert("Failed to send message. Try again." + (error instanceof Error ? error.message : ""))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">

      <div className="contact-card">

        <h2 className="section-title">Send a Message</h2>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            disabled={loading}
            autoComplete="off"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            disabled={loading}
            autoComplete="off"
          />

          <input
            type="text"
            name="user_subject"
            placeholder="Subject (Optional)"
            disabled={loading}
            autoComplete="off"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            disabled={loading}
            autoComplete="off"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact
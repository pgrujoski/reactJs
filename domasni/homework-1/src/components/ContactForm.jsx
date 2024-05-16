import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;

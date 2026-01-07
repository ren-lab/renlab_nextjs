export const metadata = {
  title: 'Contact',
  metaTitle: 'Contact us',
  description: 'Get in touch with RENLAB',
};

export default function ContactPage() {
  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>Contact</h1>
          </header>
          <p>Get in touch with us? Here is how:</p>

          <ul>
            <li>Lab location: CMM-East 2071, San Diego, CA</li>
            <li>Office phone: 858-822-5766</li>
            <li>Lab phone: 858-822-5767</li>
            <li>
              E-mail: <a href="mailto:biren@ucsd.edu">biren@ucsd.edu</a>
            </li>
          </ul>

          <p>
            Assistant: <a href="mailto:bet003@ucsd.edu">Bernadeth Torres</a> &lt; bet003@ucsd.edu &gt;
          </p>
        </article>
      </div>
    </div>
  );
}


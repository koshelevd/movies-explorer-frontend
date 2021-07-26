import { useState } from 'react';
import './Alert.css';

function Alert({ status }) {
  const [isOpen, setIsOpen] = useState(false);
  const { message } = status;

  function close() {
    setIsOpen(false);
  }
  return (
    <section className="alert">
      <span className="alert__close-button" onClick={close}>
        &times;
      </span>
      {message}
    </section>
  );
}

export default Alert;

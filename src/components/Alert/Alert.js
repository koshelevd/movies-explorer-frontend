import { useEffect, useState } from 'react';
import './Alert.css';

function Alert({ status }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(status !== '');
  }, [status]);

  function close() {
    setIsOpen(false);
  }
  return (
    <section className={`alert ${isOpen ? 'alert_opened' : ''}`}>
      <p className="alert__message">
        <span className="alert__status">{status}</span>
        <span className="alert__close-button smoothly" onClick={close}>
          &times;
        </span>
      </p>
    </section>
  );
}

export default Alert;

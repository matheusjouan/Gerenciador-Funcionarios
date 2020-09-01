import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { useToast, ToastMessage } from '../../../context/ToastContext';

import { Container } from './styles';

interface ToastProps {
  toast: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container type={toast.type} style={style}>
      {icons[toast.type || 'info']}
      <div>
        <strong>{toast.title}</strong>
      </div>
      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;

import React, { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

interface BookingModalProps {
  name: string;
  destination: string | null;
  startDate: string;
  endDate: string;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  name,
  destination,
  startDate,
  endDate,
  onClose,
}) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 6000),
      setTimeout(() => onClose(), 10000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-dark-four text-center p-6 rounded-xl shadow-lg max-w-sm w-full animate-fadeIn">
        {(step === 1 || step === 2) && (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            {step === 1 && (
              <p className="text-lg font-medium">
                Conferindo disponibilidade de datas...
              </p>
            )}
            {step === 2 && (
              <p className="text-lg font-medium">Confirmando reserva...</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center space-y-3">
            <CheckCircle className="text-green-500 w-12 h-12" />
            <p className="text-lg font-semibold">Confirmado!</p>
            <p className="text-sm">
              Viagem de <strong>{name}</strong> para{" "}
              <strong>{destination}</strong>
              <br />
              dos dias <strong>{startDate}</strong> a <strong>{endDate}</strong>
              .
              <br />
              Entraremos em contato.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;

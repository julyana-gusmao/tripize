import React, { useState } from "react";
import { addDays } from "date-fns";
import { DateRange, RangeKeyDict } from "react-date-range";
import ptBR from "date-fns/locale/pt-BR";
import backpacker from "../assets/backpacker.png";
import Input from "../components/Input";
import { formatDate } from "../utils/formatDate";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import BookingModal from "../components/BookingModal";

import Select from "react-select";
import countries from "world-countries";
import PrimaryButton from "../components/PrimaryButton";

const countryOptions = countries.map((country) => ({
  value: country.name.common,
  label: country.name.common,
}));

const BookNow: React.FC = () => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  type DateRangeType = {
    startDate: Date | null;
    endDate: Date | null;
    key: string;
  };

  const [dateRange, setDateRange] = useState<DateRangeType[]>([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleBooking = () => {
    if (!name || !destination || !startDate || !endDate) {
      setShowError(true);
      return;
    }

    setShowError(false);
    setShowModal(true);
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    setDateRange([
      {
        startDate: selection.startDate ?? null,
        endDate: selection.endDate ?? null,
        key: "selection",
      },
    ]);
  };

  const startDate = dateRange[0].startDate;
  const endDate = dateRange[0].endDate;

  return (
    <section
      id="book"
      className="relative flex my-10 flex-col bg-slate-50 dark:bg-dark-five text-dark dark:text-white"
    >
      <div className="flex flex-1 flex-col lg:flex-row justify-center items-center gap-10 p-6">
        <div className="w-full max-w-lg bg-white dark:bg-dark-four rounded-xl shadow-md p-6">
          <h2 className="text-[28px] font-bold leading-tight pb-3 pt-2">
            Agende sua próxima aventura
          </h2>
          <p className="text-base font-normal pb-4">
            Planeje sua viagem perfeita com facilidade. Preencha seus dados e
            prepare-se para explorar.
          </p>

          <div className="space-y-4 relative">
            <Input
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />

            <Select
              options={countryOptions}
              placeholder="Destino"
              value={
                destination ? { label: destination, value: destination } : null
              }
              onChange={(selected) => setDestination(selected?.value ?? null)}
              className="text-dark dark:text-dark-third"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "transparent",
                  borderColor: "#ccc",
                  height: "48px",
                }),
              }}
            />

            <Input
              placeholder="Ida"
              value={formatDate(startDate)}
              readOnly
              onClick={() => setShowDatePicker((show) => !show)}
            />
            <Input
              placeholder="Volta"
              value={formatDate(endDate)}
              readOnly
              onClick={() => setShowDatePicker((show) => !show)}
            />

            {showDatePicker && (
              <div
                className="absolute z-50"
                onMouseLeave={() => setShowDatePicker(false)}
              >
                <DateRange
                  locale={ptBR}
                  editableDateInputs={true}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  ranges={[
                    {
                      startDate: startDate ?? new Date(),
                      endDate: endDate ?? addDays(new Date(), 7),
                      key: "selection",
                    },
                  ]}
                  minDate={new Date()}
                  rangeColors={["#617AFA"]}
                  direction="horizontal"
                />
              </div>
            )}
          </div>

          <div className="pt-5 flex flex-col gap-3">
            <PrimaryButton text="Agendar Agora" onClick={handleBooking} />
            {showError && (
              <p className="text-sm text-red-500 mt-2">
                *Preencha todos os campos.
              </p>
            )}
          </div>
        </div>

        <div className="max-w-2xl">
          <img
            src={backpacker}
            alt="Backpacker"
            className="w-[90%] bg-cover bg-center"
          />
        </div>
      </div>

      {showModal && (
        <BookingModal
          name={name}
          destination={destination}
          startDate={formatDate(startDate)}
          endDate={formatDate(endDate)}
          onClose={() => {
            setShowModal(false);
            setName("");
            setDestination(null);
            setDateRange([
              {
                startDate: null,
                endDate: null,
                key: "selection",
              },
            ]);
          }}
        />
      )}
    </section>
  );
};

export default BookNow;

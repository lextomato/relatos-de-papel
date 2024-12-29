export interface Address {
  address: string;
  phone: string;
  label: string;
}

export interface Delivery {
  name: string;
  description: string;
  time: string;
}

export interface AddressCardProps {
  address: string;
  phone: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export interface DeliveryCardProps {
  name: string;
  description: string;
  time: string;
  selected: boolean;
  onSelect: () => void;
}

export interface CreditCardFormProps {
  cardNumber: string;
  handleCardNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cvv: string;
  handleCvvChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  expiryDate: string;
  handleExpirationDateChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

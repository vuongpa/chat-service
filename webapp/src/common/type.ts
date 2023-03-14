import { Control } from 'react-hook-form';

export interface AnyObject {
  [property: string]: any;
}

export interface FormItemProps {
  name: string;
  control: Control;
  label: string;
}
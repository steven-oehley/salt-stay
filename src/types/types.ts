export interface NavLink {
  label: string;
  href: string;
}
export interface ActionFunctionResult {
  message: string;
  status: 'success' | 'error';
}

export type actionFunction = (
  prevState: unknown,
  formData: FormData,
) => Promise<ActionFunctionResult>;

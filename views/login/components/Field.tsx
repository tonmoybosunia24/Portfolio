interface FieldProps {
  name: 'email' | 'password';
  label: string;
  type: string;
  autoComplete: string;
  defaultValue?: string;
  errors?: string[];
}

/** A labelled input with its error linked by aria-describedby, so screen readers read it with the field. */
export default function Field({ name, label, type, autoComplete, defaultValue, errors }: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        defaultValue={defaultValue}
        aria-invalid={errors ? true : undefined}
        aria-describedby={errors ? errorId : undefined}
        className="rounded-md border border-zinc-300 px-3 py-2 aria-invalid:border-red-600 dark:border-zinc-700 dark:bg-zinc-900"
      />
      {errors && (
        <p id={errorId} className="text-sm text-red-600">
          {errors[0]}
        </p>
      )}
    </div>
  );
}

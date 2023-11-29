import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}
const TextInput: FC<Props> = (props) => {
  const {
    label,
    name,
    placeholder,
    error = "",
    type = "text",
    className,
  } = props;
  return (
    <div className={cn("grid items-start w-full px-0 mt-4 gap-y-2", className)}>
      <Label className="font-normal" htmlFor={name}>
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
      />
      {error && (
        <p className="ml-3 text-xs font-semibold text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TextInput;

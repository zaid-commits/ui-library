import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const ButtonPage: React.FC = () => {
  const [customVariant, setCustomVariant] = useState<ButtonVariant>("default");
  const [customSize, setCustomSize] = useState<ButtonSize>("default");
  const [customText, setCustomText] = useState("Custom Button");

  const variants: ButtonVariant[] = ["default", "destructive", "outline", "secondary", "ghost", "link"];
  const sizes: ButtonSize[] = ["default", "sm", "lg", "icon"];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Button Component</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap gap-4">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Button</h2>
        <div className="flex flex-col gap-4 max-w-xs">
          <select
            value={customVariant}
            onChange={(e) => setCustomVariant(e.target.value as ButtonVariant)}
            className="border rounded p-2 text-black"
          >
            {variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
          <select
            value={customSize}
            onChange={(e) => setCustomSize(e.target.value as ButtonSize)}
            className="border rounded p-2 text-black"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="border rounded p-2 text-black"
            placeholder="Button text"
          />
          <Button variant={customVariant} size={customSize}>
            {customText}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonPage;


import { PropsWithChildren } from "react";

const AppButton = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <button
      onClick={onClick}
      className="bg-skin-highlight text-skin-base hover:bg-skin-tertiary rounded-full px-10 py-3 text-3xl font-bold transition-colors"
    >
      {children}
    </button>
  );
};

export default AppButton;

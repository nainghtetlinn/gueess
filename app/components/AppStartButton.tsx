import Link from "next/link";

const AppStartButton = () => {
  return (
    <Link href="/playground" className="btn btn-primary">
      Start Game
    </Link>
  );
};

export default AppStartButton;

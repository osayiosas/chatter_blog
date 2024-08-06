const styles: { [keys: string]: string } = {
  button:
    "rounded-md bg-primary py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp",
};

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

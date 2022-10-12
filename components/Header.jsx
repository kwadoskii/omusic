export default function Header({ title, className }) {
  return (
    <h3 className={`text-xl md:text-2xl font-semibold md:font-bold text-white mb-5 ` + className}>
      {title}
    </h3>
  );
}

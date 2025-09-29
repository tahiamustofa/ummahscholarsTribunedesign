import Link from "next/link";

const Company = () => {
  return (
    <div>
      <h3 className="bg-amber-400 font-bold text-2xl mb-4">
        This is Company
      </h3>
      <Link href="/about">GO Back</Link>
    </div>
  );
};

export default Company;

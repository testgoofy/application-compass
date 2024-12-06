import PositionListItem from "./_components/positionListItem";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p>
          Applications
        </p>
        <a href="#" className="p-2 m-2 bg-blue-500 text-white rounded">
          Add
        </a>
      </div>
      <ul className="divide-y divide-gray-100">
        <PositionListItem title="Data Scientist" company="Endress" salary={84500} />
        <PositionListItem />
      </ul>
    </div>
  );
}

import TravelCard from "../../../Components/TravelCard/TravelCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items?.map((item) => (
        <TravelCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;

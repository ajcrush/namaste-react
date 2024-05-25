import { ITEM_IMG_CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12 ">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button className="p-2 bg-black text-white shadow-lg  mx-6 rounded-lg">
                  Add +
                </button>
              </div>
              <img
                src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                className="h-[90%]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
import {
  faBell,
  faEnvelope,
  faFolder,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContentHeader() {
  return (
    <div className="bg-dark-500 flex items-center py-6 px-10 mb-1">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-xl text-light-300"
      />
      <input
        placeholder="Search..."
        className="w-4/12 mr-auto ml-4 bg-transparent outline-none"
      />
      <FontAwesomeIcon icon={faFolder} className="text-light-600 mx-2" />
      <FontAwesomeIcon icon={faBell} className="text-light-600 mx-2" />
      <FontAwesomeIcon icon={faEnvelope} className="text-light-600 mx-2" />
      <div className="w-8 h-8 bg-blue-200 rounded-xl ml-8 mr-4"></div>
      <span className="font-light text-xs text-light-100">Charlie Grant</span>
    </div>
  );
}

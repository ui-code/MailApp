import {
  faEllipsisH,
  faReply,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EmailDetails() {
  const body = `
Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis
sollicitudin pharetra.Ut id dignissim purus. Donec suscipit tortor orci,
eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum
primis in faucibus. 
      
Sed vulputate ac urna ut elementum. Nunc eget metus
vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed
dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget
nisi ultricies scelerisque ut pellentesque erat. 
      
Greetings, 
Charlie.
    `;
  return (
    <div className="flex flex-col bg-dark-500 w-2/3">
      <span className="text-2xs text-center text-light-600 my-6">13 / 13</span>
      <div className="flex items-center px-10">
        <div className="w-10 h-10 rounded-xl bg-red-200 mr-4"></div>
        <span className="text-sm text-light-200 font-medium">
          Dribbble Team
        </span>
        <div className="flex relative ml-6">
          <div className="w-6 h-6 rounded-full bg-red-200 border border-2 border-dark-600"></div>
          <div className="w-6 h-6 rounded-full bg-blue-200 border border-2 border-dark-600 absolute ml-3"></div>
          <div className="w-6 h-6 rounded-full bg-green-200 border border-2 border-dark-600 absolute ml-6"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-200 border border-2 border-dark-600 absolute ml-9"></div>
        </div>
        <div className="flex ml-auto">
          <FontAwesomeIcon icon={faReply} className="mx-2 text-light-200" />
          <FontAwesomeIcon icon={faTrashCan} className="mx-2 text-light-200" />
          <FontAwesomeIcon icon={faEllipsisH} className="mx-2 text-light-200" />
        </div>
      </div>
      <span className="px-10 text-2xs text-light-600 font-bold mt-6">
        3:30PM
      </span>
      <span className="px-10 text-lg text-light-100 font-light mb-6">
        How are you getting on?
      </span>
      <div className="px-10 text-xs text-light-500 whitespace-pre">{body}</div>
    </div>
  );
}

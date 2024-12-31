import Chip from '../images/icon/chip.png';
import Chip2 from '../images/icon/chip2.png';
import { maskCardNumber } from './Utility/utils';

export default function DataCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isDark,
}) {
  return (
    <div
      className={` overflow-hidden rounded-3xl max-w-[350px] h-[235px] sm:w-96 ${
        isDark
          ? 'bg-gradient-to-b  from-[#5B5A6F] to-[#000000] text-white'
          : 'bg-white text-gray-800 border border-gray-300'
      }`}
    >
      <div className="flex px-6 py-4 justify-between items-center">
        <div>
          <p className="text-sm">Balance</p>
          <p className="text-2xl font-semibold">{balance}</p>
        </div>
        <div className=" w-[35px] h-[35px] rounded-sm">
          <img
            src={isDark ? Chip2 : Chip}
            alt="chip image"
            className={`w-[100%] h-[100%] object-cover   ${
              isDark ? 'bg-transparent' : 'bg-slate-300'
            }`}
          />
        </div>
      </div>
      <div className="mt-6 px-6 py-4" py-4>
        <div className="flex justify-between text-sm ">
          <div>
            <p>CARD HOLDER</p>
            <p className="font-medium">{cardHolder}</p>
          </div>
          <div>
            <p>VALID THRU</p>
            <p className="font-medium">{validThru}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 0.15) 15%, rgba(255, 255, 255, 0) 100%)',
        }}
        className={`w-full h-[100%] bg-gradient-to-b   from-[#5B5A6F] to-[#000000] ${
          isDark
            ? ' border-none '
            : 'border border-t-1 border-b-0 border-l-0 border-r-0'
        }}`}
      >
       
        <div className="relative py-2 flex">
        <div>
        <p className=" px-6  text-lg font-medium">{maskCardNumber(cardNumber)}</p>
        </div>
          <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-300 opacity-50"></div>
          <div className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-300 opacity-50 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

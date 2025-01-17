import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { classNames } from '@common/class-names';

export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || '';
export const tokenList = [
  {
    id: 1,
    name: 'USDA',
    nameInPair: 'usda',
    logo: '/assets/tokens/usda.svg',
    listed: true,
    address: contractAddress,
    decimals: 6
  },
  {
    id: 2,
    name: 'DIKO',
    nameInPair: 'diko',
    logo: '/assets/tokens/diko.svg',
    listed: true,
    address: contractAddress,
    decimals: 6
  },
  {
    id: 3,
    name: 'STX',
    nameInPair: 'wstx',
    logo: '/assets/tokens/stx.svg',
    listed: true,
    address: contractAddress,
    decimals: 6
  },
  {
    id: 4,
    name: 'xBTC',
    nameInPair: 'xbtc',
    logo: '/assets/tokens/xbtc.svg',
    listed: true,
    address: 'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR',
    decimals: 8
  },
  {
    id: 5,
    name: 'WELSH',
    nameInPair: 'welsh',
    logo: '/assets/tokens/welsh.png',
    listed: true,
    address: 'SP3NE50GEXFG9SZGTT51P40X2CKYSZ5CC4ZTZ7A2G',
    decimals: 6
  },
];

type Token = {
  id: number;
  name: string;
  nameInPair: string;
  logo: string;
  listed: boolean;
};
interface Props {
  selected: Token;
  setSelected(selected: Token): void;
  disabled?: boolean;
}

export const TokenSwapList: React.FC<Props> = ({ selected, setSelected, disabled }) => {
  return (
    <Listbox value={selected} onChange={setSelected} disabled={disabled}>
      {({ open }) => (
        <>
          <div className="relative flex-1">
            <Listbox.Button
              className={`relative w-full py-2 pl-3 ${
                disabled ? 'pr-3' : 'pr-10'
              } text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default md:w-36 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-zinc-900 dark:border-zinc-900`}
            >
              <span className="flex items-center">
                <img src={selected.logo} alt="" className="w-6 h-6 rounded-full shrink-0" />
                <span className="block ml-3 truncate dark:text-zinc-50">{selected.name}</span>
              </span>
              {!disabled ? (
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
              ) : null}
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg dark:text-zinc-50 dark:bg-zinc-900 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {tokenList
                  .filter(token => token.listed)
                  .map(token => (
                    <Listbox.Option
                      key={token.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={token}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={token.logo}
                              alt=""
                              className="w-6 h-6 rounded-full shrink-0"
                            />
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate dark:text-zinc-50'
                              )}
                            >
                              {token.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';

export default function ExampleMenu() {
  return (
    <div className="fixed top-24 w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
          Options
          <ChevronDownIcon className="h-5 w-5 text-white/60" />
        </MenuButton>

        <MenuItems
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white shadow-lg focus:outline-none"
          static
        >
          <MenuItem>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-700' : ''
                } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3`}
              >
                <PencilIcon className="h-5 w-5 text-white/30" />
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘E</kbd>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-700' : ''
                } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3`}
              >
                <Square2StackIcon className="h-5 w-5 text-white/30" />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
              </button>
            )}
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-700' : ''
                } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3`}
              >
                <ArchiveBoxXMarkIcon className="h-5 w-5 text-white/30" />
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘A</kbd>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-700' : ''
                } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3`}
              >
                <TrashIcon className="h-5 w-5 text-white/30" />
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

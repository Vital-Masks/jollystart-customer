import Container from '@/components/Shared/Container';
import Athletics from '@/components/Sports/Athletics';
import Badminton from '@/components/Sports/Badminton';
import Football from '@/components/Sports/Football';
import Hockey from '@/components/Sports/Hockey';
import TableTennis from '@/components/Sports/TableTennis';
import Volleyball from '@/components/Sports/Volleyball';
import WeightLifting from '@/components/Sports/WeightLifting';
import React, { useState } from 'react';

const tabs = [
  { name: 'Football', component: <Football /> },
  { name: 'Volleyball', component: <Volleyball /> },
  { name: 'Hockey', component: <Hockey /> },
  { name: 'Badminton', component: <Badminton /> },
  { name: 'Table Tennis', component: <TableTennis /> },
  { name: 'Weight Lifting', component: <WeightLifting /> },
  { name: 'Athletics', component: <Athletics /> },
];

const Sports = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white p-5">
      <Container>
        <div>
          <div className="sm:hidden bg-slate-100 text-slate-600">
            <label htmlFor="tabs" className="sr-only">
              Select a sport
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={tabs[0].name}
              onChange={(e) => setCurrentTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block">
            <nav
              className="flex divide-x divide-gray-200 rounded-lg shadow isolate"
              aria-label="Tabs"
            >
              {tabs.map((tab, tabIdx) => (
                <button
                  key={tab.name}
                  onClick={() => setCurrentTab(tab.name)}
                  className={classNames(
                    tab.name === currentTab
                      ? 'bg-blue-800 text-white '
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50',
                    tabIdx === 0 ? 'rounded-l-lg' : '',
                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                    'group relative min-w-0 flex-1 overflow-hidden  py-4 px-4 text-center text-sm font-medium  focus:z-10'
                  )}
                >
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-10 text-black">
          {tabs.find((x) => x.name === currentTab).component}
        </div>
      </Container>
    </div>
  );
};

export default Sports;

import React from 'react';

import { TabSelector } from './TabSelector';
import { EventsSearch } from './EventsSearch';
import { EventsTypeFilter } from './EventsTypeFilter';

import './filters.pcss';

const Filters = () => {
    return (
        <>
            <div className="filters-group">
                <div className="filters-item">
                    <TabSelector />
                </div>
                <div className="filters-item"><EventsSearch /></div>
            </div>
            <div className="filters-group">
                <div className="filters-item">
                    <EventsTypeFilter />
                </div>
                <div className="filters-item">Miscellaneous filters</div>
            </div>
        </>
    );
};

export { Filters };
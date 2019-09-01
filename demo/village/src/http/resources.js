import genResource from './base-services';

function cacheFactory(cacheKey = 'defaultHttpCache', cacheConfig = {capacity: 0}) {
    return {
        cacheKey,
        ...cacheConfig
    };
};

let resources = {
    // Projects: genResource('/projects/', cacheFactory('Projects', {capacity: 20})), 
    Posts: genResource('/posts/:areaId/', cacheFactory('Posts', {capacity: 0})),
    Areas: genResource('/areas/', cacheFactory('Areas', {capacity: 20})),
};


export default resources;

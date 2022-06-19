import _ from "lodash";

export const paginate = (Groups, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    return _(Groups)
        .slice(startIndex)
        .take(perPage)
        .value();
};

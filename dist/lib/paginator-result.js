"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = exports.paginatorResult = void 0;
const paginatorResult = (paginator, type) => {
    const totalPages = paginator.last_page;
    const currentPage = paginator.current_page;
    const perPage = paginator.per_page;
    const { total } = paginator;
    const startAt = (currentPage - 1) * perPage + 1;
    const end = currentPage * perPage;
    const endAt = total < end ? total : end;
    const result = {
        [type]: paginator.data,
        pagination: {
            current_page: currentPage,
            per_page: perPage,
            total_pages: totalPages,
            start_at: startAt,
            end_at: endAt,
            total_count: total,
            next_page: currentPage >= totalPages ? null : currentPage + 1,
            prev_page: currentPage === 1 ? null : currentPage - 1,
            is_first_page: currentPage === 1,
            is_last_page: currentPage >= totalPages,
        },
    };
    return result;
};
exports.paginatorResult = paginatorResult;
const paginate = (data, perPage, page) => {
    const limit = perPage;
    const total = data.count;
    const result = {
        total,
        per_page: limit,
        current_page: page,
        last_page: Math.ceil(total / perPage),
        data: data.rows,
    };
    return result;
};
exports.paginate = paginate;
//# sourceMappingURL=paginator-result.js.map
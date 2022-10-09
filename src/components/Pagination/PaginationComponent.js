import { getsTotalPages } from "../utility/PagingUtilities";
import PropTypes from "prop-types";

import styles from "./PaginationComponent.module.css";

const Pagination = (props) => {
  const { userLengths, getPages, numberPage, selectedDelete } = props;

  const totalPages = getsTotalPages(userLengths);
  const changePage = (index) => {
    getPages(index);
  };

  const navigatePage = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPages) {
      index = totalPages;
    }
    getPages(index);
  };

  let numberPages = [];
  numberPages.push(
    <div
      key={-3}
      className={`${styles.numberPage} ${numberPage === 1 ? styles.disabled : ""}`}
      onClick={() => changePage(1)}
    >
      <i className="fas fa-angle-double-left"></i>
    </div>
  );
  numberPages.push(
    <div
      key={-2}
      className={`${styles.numberPage} ${numberPage === 1 ? styles.disabled : ""}`}
      onClick={() => navigatePage(numberPage - 1)}
    >
      <i className="fas fa-angle-left"></i>
    </div>
  );
  for (let i = 1; i <= totalPages; i++) {
    numberPages.push(
      <div
        key={i}
        onClick={() => changePage(i)}
        className={`${styles.numberPage} ${numberPage === i ? styles.selected : ""}`}
      >
        {i}
      </div>
    );
  }
  numberPages.push(
    <div
      key={-1}
      className={`${styles.numberPage} ${numberPage === totalPages ? styles.disabled : ""}`}
      onClick={() => navigatePage(numberPage + 1)}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
  numberPages.push(
    <div
      key={0}
      className={`${styles.numberPage} ${numberPage === totalPages ? styles.disabled : ""}`}
      onClick={() => changePage(totalPages)}
    >
      <i className="fas fa-angle-double-right"></i>
    </div>
  );

  return (
    <div className={styles.paginationContainer}>
      <button className={styles.deleteButton} onClick={() => selectedDelete()}>
        Select Deleted
      </button>
      <div className={styles.pagination}>{numberPages}</div>
    </div>
  );
};

Pagination.propTypes = {
  userLengths: PropTypes.number,
  getPages: PropTypes.func,
  numberPage: PropTypes.number,
  selectedDelete: PropTypes.func,
};

export default Pagination;

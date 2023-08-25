import axios from '../../axios';
import { useState, useEffect } from 'react';
export default function (props) {
  const [vouchers, setVouchers] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const getRecords = () => {
    try {
      axios.get(`voucher/list?page=${pageNo}`).then((result) => {
        setVouchers(result.data.data);
        setLastPage(result.data.totalPages);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecords();
  });
  const prevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
      getRecords();
    }
  };
  const nextPage = () => {
    if (pageNo < lastPage) {
      setPageNo(pageNo + 1);
      getRecords();
    }
  };
  const vouchersList = vouchers?.map((item) => {
    return (
      <div className="row border" key={item.code}>
        <div className="col-sm-3">{item.code}</div>
        <div className="col-sm-3">{item.category}</div>
      </div>
    );
  });
  if (vouchers?.length <= 0) {
    return <div className="container">No Data Found</div>;
  } else {
    let pagination = (
      <div className="row">
        <div className="col-sm-3">
          <span className="btn" onClick={prevPage}>
            {' '}
            Back{' '}
          </span>
          <span>
            &nbsp;{pageNo} of {lastPage}&nbsp;
          </span>
          <span className="btn" onClick={nextPage}>
            {' '}
            Next{' '}
          </span>
        </div>
      </div>
    );
    return (
      <div className="container-fluid text-center">
        <div className="container-sm">
          <div className="row border bg-dark-subtle .fs-1 font-weight">
            <div className="col-sm-3">Code</div>
            <div className="col-sm-3">Category</div>
          </div>
          {vouchersList}
        </div>
        <div className="row">&nbsp;</div>
        {pagination}
      </div>
    );
  }
}

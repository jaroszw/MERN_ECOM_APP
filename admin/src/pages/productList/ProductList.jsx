import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../redux/apiCalls';
import { useSelector, useDispatch } from 'react-redux';

import './productList.css';

const ProductList = () => {
  const { products, isFetching } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {};

  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" alt="" src={params.row.img} />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: 'inStock',
      headerName: 'inStock',
      width: 200,
    },
    { field: 'price', headerName: 'Price', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        console.log(params.row);
        return isFetching ? (
          '...Loading proucts'
        ) : (
          <React.Fragment>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteForeverIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;

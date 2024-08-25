// src/components/organisms/PaginatedTable.jsx
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Button, Input } from '@nextui-org/react';

const PaginatedTable = ({ columns, data, itemsPerPage = 8, searchProperty = "nombre" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  const filteredData = data.filter(row =>
    row[searchProperty].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = filteredData.slice(startIdx, endIdx);

  return (
    <div>
      <Input
      type='search'
        fullWidth
        clearable
        placeholder={`Buscar por ${searchProperty}`}
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4"
      />
      <Table aria-label="Paginated Data Table">
        <TableHeader>
          {columns.map((column, index) => (
            <TableColumn key={index}>{column}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <Pagination
          total={Math.ceil(filteredData.length / itemsPerPage)}
          color="primary"
          page={currentPage}
          onChange={setCurrentPage}
        />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="flat"
            color="primary"
            onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="primary"
            onPress={() => setCurrentPage((prev) => (prev < Math.ceil(filteredData.length / itemsPerPage) ? prev + 1 : prev))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginatedTable;
import React from "react";

const Detail = props => {
  return (
    <div>
      <h1>Team detail</h1>
    </div>
  );
};

Detail.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Detail;

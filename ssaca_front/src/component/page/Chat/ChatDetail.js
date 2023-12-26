import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatDetail = ({ chatDetail, onRemove }) => {
  const { id, sellerId, userId, boardId} = chatDetail;

  console.log(chatDetail.id, chatDetail.sellerId, chatDetail.userId);
};
export default ChatDetail;

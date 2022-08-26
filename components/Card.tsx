import React from "react";

export default function Card(props: any) {
  const { className }: { className: string } = props;

  return (
    <div className={`px-4 py-2 bg-white rounded-lg ${className}`}>
      { React.Children.only(props.children) }
    </div>
  );
}
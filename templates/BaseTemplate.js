import Alert from "@/atoms/Alert";

const BaseTemplate = ({}) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-blue-100">
      <Alert variant="info" > Make sure to add "use client" in client component </Alert>
    </div>
  );
};

export default BaseTemplate;

interface UserBanButtonProps {
    onClick: () => void;
  }
  
  export default function UserBanButton({ onClick }: UserBanButtonProps) {
    return (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={onClick}
      >
        Ban User
      </button>
    );
  }
  
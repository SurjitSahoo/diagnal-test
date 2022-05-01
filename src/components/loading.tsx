interface Props {
  className?: string;
}
export default function Loading({ className }: Props) {
  return (
    <div className={`h-full w-full flex justify-center items-center ${className}`}>
      <div className='animate-spin rounded-full h-20 w-20 border-b-4 border-teal-700' />
    </div>
  );
}

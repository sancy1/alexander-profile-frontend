
// app/loading.tsx
import LoadingSpinner from "@/components/LoadingSpinner"; // Adjust path if your components are elsewhere

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton component
  // if you prefer a more structured loading state.
  return <LoadingSpinner />;
}
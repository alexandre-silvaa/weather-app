import { SkeletonProps as MUISkeletonProps, Skeleton as MUISkeleton } from '@mui/material';

type SkeletonProps = {
  readonly variant?: 'text' | 'circular' | 'rectangular';
  readonly width?: number | string;
  readonly height?: number | string;
  readonly className?: string;
  readonly loading?: boolean;
} & MUISkeletonProps;

export default function Skeleton({ variant, width, height, className, loading, children, ...rest }: SkeletonProps) {
  if (loading) {
    return <MUISkeleton variant={variant} width={width} height={height} className={`w-full ${className}`} {...rest} />;
  }

  if (!loading) {
    return children;
  }
}

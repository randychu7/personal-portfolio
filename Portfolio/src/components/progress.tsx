import * as Progress from '@radix-ui/react-progress';

const ProgressBar = ({ value }) => {
  return (
    <Progress.Root className="ProgressRoot border-2 dark:border-yellow-400 border-violet-400" value={value} style={{ width: '100%' }}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{
          transform: `translateX(-${(100 - value)}%)`,
          backgroundColor: 'var(--progress-color)',
          width: `${value}%`,
        }}
      />
      <style>
        {`
        .ProgressIndicator {
          background-color: var(--progress-color);
        }

        @media (max-width: 768px) {
          .ProgressIndicator {
            width: ${value * 0.8}vw; /* Adjust the scaling factor as needed */
          }
        }
        
        @media (prefers-color-scheme: light) {
          :root {
            --progress-color: #5A48A9; /* Light mode color */
          }
        }
        
        @media (prefers-color-scheme: dark) {
          :root {
            --progress-color: #FCD34D; /* Dark mode color */
          }
        }
        `}
      </style>
    </Progress.Root>
  );
};

export default ProgressBar;

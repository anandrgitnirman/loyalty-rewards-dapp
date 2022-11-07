import moment from 'moment';
import { checkDateIsGreaterThan, checkDateIsBetween } from './date';

export type AirdropWindowTimeline = {
  airdrop_window_timeline_date: string;
  airdrop_window_timeline_description: string;
  airdrop_window_timeline_title: string;
};

export type AirdropWindow = {
  airdrop_id: number;
  airdrop_window_id: number;
  airdrop_window_order: number;
  airdrop_window_name: string;
  airdrop_window_registration_start_period: string;
  airdrop_window_registration_end_period: string;
  airdrop_window_claim_start_period: string;
  airdrop_window_claim_end_period: string;
  next_window_start_period: string;
  airdrop_window_schedule_description: string;
  airdrop_window_timeline: AirdropWindowTimeline[];
  airdrop_window_total_tokens: number;
  airdrop_window_status?: WindowStatus;
};

export enum WindowStatus {
  UPCOMING = 'UPCOMING',
  REGISTRATION = 'REGISTRATION',
  IDLE = 'IDLE', // Between registration and the claim period
  CLAIM = 'CLAIM',
  LAST_CLAIM = 'LAST_CLAIM',
}

export const AIRDROP_RULE_STRING = 'Loyality Rewards Rules';
export const AIRDROP_TOKEN_DIVISOR = 100000000;
export const AIRDROP_TOKEN_SYMBOL = 'AGIX';
export const AIRDROP_SITE_STRING = 'SingularityNet';
export const AIRDROP_PENDING_CLAIM_STRING = 'There is already a pending claim. Please wait for it to complete';
export const AIRDROP_WINDOW_STRING = 'Airdrop Window';
export const AIRDROP_SCHEDULE_STRING = 'Airdrop Schedule';
export const AIRDROP_SUPPORT_QUERY_STRING = 'Loyality Airdrop Support Enquiry';
export const TOTAL_AIRDROP_TOKENS_STRING = 'Total Airdrop Tokens';
export const TOTAL_AIRDROPS_STRING = 'Airdrops';
export const SUCCESSFUL_REGISTRATION_STRING =
  'Cardano Wallet connected Successfully, You are now registered for Loyalty rewards';
export const SUCCESSFUL_CLAIM_STRING = 'Successfully Claimed Initiated for Window';
export const AIRDROP_ELIGIBILITY_STRING = 'Airdrop Status';
export const AIRDROP_NOT_QUALIFIED_STRING = 'Not Qualified';
export const AIRDROP_WINDOW_INELIGIBILITY_STRING = 'Sorry, You are not qualified for airdrop window ';
export const AIRDROP_CHECK_RULES_SCHEDULE = 'Please check the rules and schedule for the next window.';
export const AIRDROP_HOW_IT_WORKS_STRING = 'How Loyality Rewards Works';
export const AIRDROP_TITLE_STRING = 'Loyality Rewards Info:';
export const AIRDROP_DESCRIPTION_STRING =
  'During the first year of Phase Two, this 5% of the monthly tranches will be allotted to Phase One AGI (ERC-20) token holders as a reward for loyalty and to incentivize participation in the Phase II network. The specifics of this distribution are currently being worked out together with legal counsel as there are subtleties regarding “airdrops” and similar mechanisms in various jurisdictions. The utilization of the Loyalty Reward token pool after the first year may be changed via democratic vote of token-holders';
export const AIRDROP_CLAIM_IN_PROGRESS_STRING = 'Your Claim is in progress';

export const AIRDROP_LINKS = {
  WEBSITE: 'https://singularitynet.io/',
  BLOG_POST: '',
  WHITEPAPER: 'https://public.singularitynet.io/whitepaper.pdf',
  TELEGRAM: 'https://telegram.me/singularitynet',
  DOCUMENTATION: 'https://dev.singularitynet.io/',
  OFFICIAL_BLOG: 'https://blog.singularitynet.io/',
  TWITTER: 'https://twitter.com/singularity_net',
  FACEBOOK: 'https://www.facebook.com/singularityNET.io',
  LINKEDIN: 'https://www.linkedin.com/company/singularitynet/',
  YOUTUBE: 'https://www.youtube.com/channel/UCbTE8vfz5zuEK5uRnc2yjrw',
};

export const AIRDROP_RULES = [
  {
    title: 'AGIX Balance',
    description: 'TBD',
  },
  {
    title: 'Registration Requirements',
    description:
      'None. If your address has received AGIX during the hardfork, it will be eligible to claim loyalty rewards. Users can claim each allocation once it becomes available, or claim all released allocations in one transaction',
  },
  {
    title: 'KYC requirements',
    description: 'None',
  },
  {
    title: 'Claiming End Date',
    description:
      'Phase 1 holders have 3 years to claim their year 1 loyalty rewards, up until November 22nd 2025, 11am UTC',
  },
  {
    title: 'Cardano Claiming Special Instructions',
    description:
      'Due to the way that transferring a native asset on the Cardano network works, users will need to deposit about 2 ADA from the wallet they are claiming the rewards to (in order to cover for sending the AGIX tokens). Users will receive these back together with the AGIX Loyalty Reward Tokens.',
  },
];

export const HOW_IT_WORKS = [
  {
    title: 'Eligibility',
    description:
      'Snapshot: May 28th, 2021, at 08:00:20 AM UTC+0 (Hardfork snapshot of AGI holders). Eligibility restricted to Private wallets only - Token balances which were held on Binance/Kucoin or other centralized exchanges or smart contracts during the hardfork are not eligible. Minimum AGI required for eligibility: 10 AGI',
  },
  {
    title: 'Allocation',
    description: 'Rewards are proportional to token balance during the snapshot, +20% bonus for stakers. Staking Bonus: AGI Tokens which were staked on staking.singularitynet.io at the time of the snapshot will qualify for a 20% bonus on top of the allocated loyalty rewards',
  },
  {
    title: 'Total Year 1 tokens to Distribute',
    description:
      '8,293,401 AGIX, in 6 equal batches.',
  },
  {
    title: 'Distribution periods',
    description:
      'There will be six monthly allocations, starting November 22nd, 2022 and running to March 21st, 2023',
  },
];

export const windowStateMap = {
  [WindowStatus.CLAIM]: 'Airdrop Claim Open',
  [WindowStatus.REGISTRATION]: 'Airdrop Registration Open',
  [WindowStatus.UPCOMING]: '',
};

export const windowNameActionMap = {
  [WindowStatus.UPCOMING]: 'Registration',
  [WindowStatus.IDLE]: 'Claiming',
  [WindowStatus.REGISTRATION]: 'Claiming',
  [WindowStatus.CLAIM]: 'Claiming',
  [WindowStatus.LAST_CLAIM]: 'Claiming',
};

export const windowStatusActionMap = {
  [WindowStatus.UPCOMING]: 'Starts',
  [WindowStatus.IDLE]: 'Starts',
  [WindowStatus.REGISTRATION]: 'Closes',
  [WindowStatus.CLAIM]: 'Starts',
  [WindowStatus.LAST_CLAIM]: 'closes',
};

export const windowStatusLabelMap = {
  [WindowStatus.UPCOMING]: 'Airdrop Registration Window',
  [WindowStatus.REGISTRATION]: 'Airdrop Registration Window',
  [WindowStatus.IDLE]: 'Airdrop Claim Window',
  [WindowStatus.CLAIM]: 'Airdrop Claim Window',
  [WindowStatus.LAST_CLAIM]: 'Airdrop Claim Window',
};

export const LOADER_MESSAGE = {
  MAP_CARDANO_WALLET_PROGRESS: 'Mapping to your Cardano wallet {wallet} in progress',
  CLAIM_PROGRESS: 'Claim in progress',
};

export const TRANSACTION_TYPE = {
  ADA_TRANSFER: 'ada_transfer',
  TOKEN_TRANSFER: 'token_transfer',
};

export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const findActiveWindow = (windows: AirdropWindow[]): AirdropWindow | undefined => {
  const sortedWindows = windows
    .slice()
    .sort((windowA, windowB) => windowA.airdrop_window_id - windowB.airdrop_window_id);

  const todayDate = moment.utc(new Date());
  const isUpcomming = checkDateIsGreaterThan(moment.utc(sortedWindows[0].airdrop_window_claim_start_period), todayDate);
  let activeWindow = sortedWindows[0];
  activeWindow.airdrop_window_status = isUpcomming ? WindowStatus.IDLE : WindowStatus.CLAIM;
  activeWindow.next_window_start_period = isUpcomming
    ? sortedWindows[0].airdrop_window_claim_start_period
    : sortedWindows[0].airdrop_window_claim_end_period;

  sortedWindows.map((item, index) => {
    if (
      checkDateIsBetween(
        moment.utc(item.airdrop_window_claim_start_period),
        moment.utc(item.airdrop_window_claim_end_period),
        todayDate
      )
    ) {
      activeWindow = item;
      activeWindow.airdrop_window_status =
        index === sortedWindows.length - 1 ? WindowStatus.LAST_CLAIM : WindowStatus.CLAIM;
      activeWindow.next_window_start_period = sortedWindows[index].airdrop_window_claim_end_period;
    }
  });

  return activeWindow;
};

export const findFirstUpcomingWindow = (windows: AirdropWindow[]): AirdropWindow | undefined => {
  const now = new Date();
  const sortedWindows = windows;

  const firstUpcomingWindow = sortedWindows.find((window) =>
    checkDateIsGreaterThan(window.airdrop_window_registration_start_period, now)
  );
  if (firstUpcomingWindow) {
    firstUpcomingWindow.airdrop_window_status = WindowStatus.UPCOMING;
  }
  return firstUpcomingWindow;
};

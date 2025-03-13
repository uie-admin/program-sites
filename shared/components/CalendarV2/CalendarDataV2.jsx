import axios from "axios";
import { createContext } from "react";

// UPDATE CALENDAR DATA HERE
// https://airtable.com/appKDcbRP09tSx7o5/tblxPgptk13IWNYbl/viwxiPaHV4QdoIHbD?blocks=hide

//// EXAMPLE ////

/// COHORT # START ///
/// COHORT # START ///
/// COHORT # START ///

// const TABLE_ID_COHORT# = process.env.REACT_APP_TABLE_ID_COHORT#;

// export const COHORT#_DATE_RANGE = [
//   {
//     start: `MONTH DAY`,
//     end: `MONTH DAY`,
//   }
// ]

// export const fetchCohort# = async () => {    <------ UPDATE
//   const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT#}`; <----- UPDATE
//   const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

//   try {
//     const response = await axios.get(url, { headers });
//     return response.data.records.map(record => ({
//       week: record.fields.Week,

//       name1: record.fields.Name1,
//       timeLecture1: record.fields.TimeLecture1,
//       timeCoaching1: record.fields.TimeCoaching1,
//       rich1: record.fields.RichText1,

//       name2: record.fields.Name2,
//       timeLecture2: record.fields.TimeLecture2,
//       timeCoaching2: record.fields.TimeCoaching2,
//       rich2: record.fields.RichText2,

//     }));
//   } catch (error) {
//     console.error('Error fetching data from Airtable', error);
//     return [];
//   }
// };

/// COHORT # END ///
/// COHORT # END ///
/// COHORT # END ///

// # METRICS

const HOURS_BEFORE_CUTOFF = 2;
export const CohortContext = createContext(null);
export const UpcomingCohortContext = createContext(null);

const cohortTables = {
    KEY: import.meta.env.VITE_AIRTABLE_API_KEY,
    ID: import.meta.env.VITE_BASE_ID,
    COHORTS: import.meta.env.VITE_COHORT_TABLES.split(","),
};

export const fetchCohorts = async () => {
    console.log(cohortTables);
    const cohortDatas = await Promise.all(
        cohortTables["COHORTS"].map(async (cohortID) => {
            return fetchCohort(cohortID);
        })
    );

    // Ensure week objects are in order
    let upcomingCohorts = cohortDatas.map((cohort) => {
        return cohort.sort((a, b) => new Date(a.start) - new Date(b.start));
    });

    // Sort by start date
    upcomingCohorts = upcomingCohorts.sort(
        (a, b) => new Date(a[0].watchStart1) > new Date(b[0].watchStart1)
    );

    return upcomingCohorts;
};

export const filterUpcomingCohorts = (cohorts) => {
    if (!cohorts) return [];
    const now = new Date();

    /* filter out cohorts that have started already by subtracting 2 hours from the start time. If the calculated time is greater than now, keep the cohort. */
    let upcomingCohorts = cohorts.filter((cohortData) => {
        const cutoffDate = new Date(cohortData[0].watchStart1);
        cutoffDate.setHours(cutoffDate.getHours() - HOURS_BEFORE_CUTOFF);
        return cutoffDate > now;
    });

    // Add original cohort number to each week object
    upcomingCohorts = upcomingCohorts.map((cohort) => {
        return cohort.map((week) => {
            return {
                ...week, cohortNumber: cohorts.indexOf(cohort) + 1,
            };
        });
    });

    return upcomingCohorts;
}

const fetchCohort = async (cohortID) => {
    const url = `https://api.airtable.com/v0/${cohortTables["ID"]}/${cohortID}`;
    const headers = {
        Authorization: `Bearer ${cohortTables["KEY"]}`,
    };

    try {
        const response = await axios.get(url, { headers });
        const res = response.data.records.map((record) => ({
            week: record.fields.Week,
            start: record.fields.CohortOutput1,
            end: record.fields.CohortOutput2,

            name1: record.fields.Name1,
            rich1: record.fields.RichText1,
            date1: record.fields.DateOutput1,

            watchStart1: record.fields.WatchStart1,
            watchEnd1: record.fields.WatchEnd1,
            coachStart1: record.fields.CoachStart1,
            coachEnd1: record.fields.CoachEnd1,

            name2: record.fields.Name2,
            rich2: record.fields.RichText2,
            date2: record.fields.DateOutput2,

            watchStart2: record.fields.WatchStart2,
            watchEnd2: record.fields.WatchEnd2,
            coachStart2: record.fields.CoachStart2,
            coachEnd2: record.fields.CoachEnd2,

            embedURL: record.fields.EmbedURL,
        }));
        return res;
    } catch (error) {
        console.error("Error fetching data from Airtable", error);
        return [];
    }
};

/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///

export const formatToLocalTime = (
    dateString,
    includeTimezone = true,
    timezone = null
) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    // Use the local timezone if no timezone is provided
    const localTimezone =
        timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"; // Fallback to UTC if no timezone is detected

    let formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: localTimezone, // Use local or passed timezone
        timeZoneName: includeTimezone ? "short" : undefined,
    }).format(date);

    // Remove the first space before AM/PM and make it lowercase
    formattedTime = formattedTime.replace(/ (\wM)/, (match) =>
        match.toLowerCase().trim()
    );

    // Remove minutes if they are ":00"
    formattedTime = formattedTime.replace(/(:00)/, "");

    return formattedTime;
};

export const timezones = [
    "UTC", // GMT+0
    "Atlantic/Azores", // GMT-1
    "Atlantic/South_Georgia", // GMT-2
    "America/Buenos_Aires", // GMT-3
    "America/St_Johns", // GMT-3:30
    "America/Caracas", // GMT-4
    "America/New_York", // GMT-5
    "America/Chicago", // GMT-6
    "America/Denver", // GMT-7
    "America/Los_Angeles", // GMT-8
    "America/Anchorage", // GMT-9
    "Pacific/Honolulu", // GMT-10
    "Pacific/Midway", // GMT-11
    "Pacific/Kiritimati", // GMT+14
    "Pacific/Apia", // GMT+13
    "Pacific/Chatham", // GMT+12:45
    "Pacific/Auckland", // GMT+12
    "Pacific/Fiji", // GMT+12
    "Pacific/Noumea", // GMT+11
    "Australia/Sydney", // GMT+10
    "Australia/Darwin", // GMT+9:30
    "Asia/Tokyo", // GMT+9
    "Asia/Seoul", // GMT+9
    "Asia/Shanghai", // GMT+8
    "Asia/Taipei", // GMT+8
    "Asia/Bangkok", // GMT+7
    "Asia/Yangon", // GMT+6:30
    "Asia/Dhaka", // GMT+6
    "Asia/Kathmandu", // GMT+5:45
    "Asia/Karachi", // GMT+5
    "Asia/Kolkata", // GMT+5:30
    "Asia/Kabul", // GMT+4:30
    "Asia/Dubai", // GMT+4
    "Asia/Yerevan", // GMT+4
    "Asia/Tehran", // GMT+3:30
    "Africa/Nairobi", // GMT+3
    "Europe/Moscow", // GMT+3
    "Europe/Istanbul", // GMT+3
    "Africa/Johannesburg", // GMT+2
    "Africa/Cairo", // GMT+2
    "Europe/Athens", // GMT+2
    "Europe/Berlin", // GMT+1
    "Europe/Paris", // GMT+1
    "Europe/London", // GMT+0
];

const getTimezoneOffset = (timezone) => {
    const now = new Date();
    return (
        new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            timeZoneName: "short",
        })
            .formatToParts(now)
            .find((parts) => parts.type === "timeZoneName")?.value || ""
    );

    // const offsetPart = tzOffset.find((part) => part.type === "timeZoneName");
    // return offsetPart ? offsetPart.value : "";
};

// Updated dropdown component
export const timezoneDropdown = (selectedTimezone, setSelectedTimezone) => {
    return (
        <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
        >
            {timezones.map((tz) => {
                const offset = getTimezoneOffset(tz);
                return (
                    <option key={tz} value={tz}>
                        {`${tz} (${offset})`}
                    </option>
                );
            })}
        </select>
    );
};

/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///

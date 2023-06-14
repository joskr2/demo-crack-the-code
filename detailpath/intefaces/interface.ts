// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

import { ReactNode } from "react";

export interface Demo {
    id:                                         number;
    courses:                                    Course[];
    faqs:                                       FAQ[];
    level:                                      number;
    number_of_sessions:                         number;
    next_learning_paths:                        NextLearningPath[];
    previous_learning_path:                     null;
    age_range_min_max:                          string;
    cover:                                      string;
    thumbnail:                                  string;
    name:                                       string;
    call_out:                                   string;
    description:                                string;
    title:                                      string;
    slug:                                       string;
    youtube_video_id:                           string;
    seo_title:                                  string;
    seo_meta_description:                       string;
    seo_estructured_data_description:           string;
    age_range:                                  string;
    frequency:                                  number;
    benefits:                                   Benefit[];
    technical_requirements:                     string[];
    available_places:                           number;
    main_color:                                 string;
    secondary_color:                            string;
    gradient_colors:                            string[];
    icon:                                       string;
    curriculum:                                 string;
    available_to_purchase:                      boolean;
    has_discount:                               boolean;
    has_subscription_discount:                  boolean;
    stripe_product_id:                          string;
    order:                                      number;
    duration:                                   string;
    category:                                   string;
    amount_usd:                                 string;
    amount_pen:                                 string;
    amount_mxn:                                 string;
    amount_col:                                 string;
    amount_per_month_usd:                       string;
    amount_per_month_pen:                       string;
    amount_per_month_mxn:                       string;
    amount_per_month_col:                       string;
    amount_full_course_by_course_usd:           string;
    amount_full_course_by_course_pen:           string;
    amount_full_course_by_course_mxn:           string;
    amount_full_course_by_course_col:           string;
    amount_subscription_usd:                    string;
    amount_subscription_pen:                    string;
    amount_subscription_mxn:                    string;
    amount_subscription_col:                    string;
    amount_subscription_per_month_usd:          string;
    amount_subscription_per_month_pen:          string;
    amount_subscription_per_month_mxn:          string;
    amount_subscription_per_month_col:          string;
    discount_percentage:                        string;
    amount_after_discount_usd:                  string;
    amount_after_discount_pen:                  string;
    amount_after_discount_mxn:                  string;
    amount_after_discount_col:                  string;
    amount_after_discount_per_month_usd:        string;
    amount_after_discount_per_month_pen:        string;
    amount_after_discount_per_month_mxn:        string;
    amount_after_discount_per_month_col:        string;
    discount_subscription_percentage:           string;
    amount_after_discount_subscription_usd:     string;
    amount_after_discount_subscription_pen:     string;
    amount_after_discount_subscription_mxn:     string;
    amount_after_discount_subscription_col:     string;
    amount_subscription_discount_per_month_usd: string;
    amount_subscription_discount_per_month_pen: string;
    amount_subscription_discount_per_month_mxn: string;
    amount_subscription_discount_per_month_col: string;
    has_seo_noindex:                            boolean;
    next_learning_path:                         number;
    age_range_v2:                               number[];
}

export interface Benefit {
    avatarSrc: string | undefined;
    author: ReactNode;
    datetime: string | undefined;
    date: ReactNode;
    rating: number;
    content: string | TrustedHTML;
    title:       string;
    description: string;
}

export interface Course {
    id:                        number;
    groups:                    any[];
    thumbnail:                 string;
    cover:                     null | string;
    final_project_cover:       null | string;
    jumbotron_cover:           null | string;
    jumbotron_cover_mobile:    null | string;
    name:                      string;
    slug:                      string;
    youtube_video_id:          string;
    call_out:                  string;
    description:               string;
    title:                     string;
    course_detail:             string;
    order_in_list:             number;
    order_in_learning_path:    number;
    number_of_sessions:        number;
    age_range:                 string;
    business_type:             string;
    frequency:                 number;
    duration:                  string;
    skills_to_develop:         string[];
    learnings:                 Benefit[];
    final_project_description: string;
    project_summary:           string;
    technical_requirements:    string[];
    lessons:                   string[];
    modules:                   any[];
    main_color:                string;
    curriculum:                null | string;
    instructive:               string;
    has_discount:              boolean;
    show_as_free_course:       boolean;
    course_base_mdl_id:        number;
    category_mdl_id:           number;
    has_test_month:            boolean;
    amount_usd:                string;
    amount_pen:                string;
    amount_mxn:                string;
    amount_col:                string;
    discount_percentage:       string;
    amount_after_discount_usd: string;
    amount_after_discount_pen: string;
    amount_after_discount_mxn: string;
    amount_after_discount_col: string;
    test_month_amount:         string;
    test_month_amount_usd:     string;
    test_month_amount_mxn:     string;
    test_month_amount_col:     string;
    test_month_duration:       number;
    test_month_classes:        number;
    benefits:                  any[];
    has_seo_noindex:           boolean;
    course_wiki_url:           null;
    available_to_purchase:     boolean;
    web_star:                  boolean;
    bundle:                    null;
    campaign:                  null;
    age_range_v2:              number[];
}

export interface FAQ {
    question: string;
    answer:   string;
}

export interface NextLearningPath {
    id:                                         number;
    courses:                                    Course[];
    faqs:                                       FAQ[];
    level:                                      number;
    cover:                                      string;
    thumbnail:                                  string;
    name:                                       string;
    call_out:                                   string;
    description:                                string;
    title:                                      string;
    slug:                                       string;
    youtube_video_id:                           string;
    seo_title:                                  string;
    seo_meta_description:                       string;
    seo_estructured_data_description:           string;
    age_range:                                  string;
    frequency:                                  number;
    benefits:                                   Benefit[];
    technical_requirements:                     string[];
    available_places:                           number;
    main_color:                                 string;
    secondary_color:                            string;
    gradient_colors:                            string[];
    icon:                                       string;
    curriculum:                                 string;
    available_to_purchase:                      boolean;
    has_discount:                               boolean;
    has_subscription_discount:                  boolean;
    stripe_product_id:                          string;
    order:                                      number;
    duration:                                   string;
    category:                                   string;
    amount_usd:                                 string;
    amount_pen:                                 string;
    amount_mxn:                                 string;
    amount_col:                                 string;
    amount_per_month_usd:                       string;
    amount_per_month_pen:                       string;
    amount_per_month_mxn:                       string;
    amount_per_month_col:                       string;
    amount_full_course_by_course_usd:           string;
    amount_full_course_by_course_pen:           string;
    amount_full_course_by_course_mxn:           string;
    amount_full_course_by_course_col:           string;
    amount_subscription_usd:                    string;
    amount_subscription_pen:                    string;
    amount_subscription_mxn:                    string;
    amount_subscription_col:                    string;
    amount_subscription_per_month_usd:          string;
    amount_subscription_per_month_pen:          string;
    amount_subscription_per_month_mxn:          string;
    amount_subscription_per_month_col:          string;
    discount_percentage:                        string;
    amount_after_discount_usd:                  string;
    amount_after_discount_pen:                  string;
    amount_after_discount_mxn:                  string;
    amount_after_discount_col:                  string;
    amount_after_discount_per_month_usd:        string;
    amount_after_discount_per_month_pen:        string;
    amount_after_discount_per_month_mxn:        string;
    amount_after_discount_per_month_col:        string;
    discount_subscription_percentage:           string;
    amount_after_discount_subscription_usd:     string;
    amount_after_discount_subscription_pen:     string;
    amount_after_discount_subscription_mxn:     string;
    amount_after_discount_subscription_col:     string;
    amount_subscription_discount_per_month_usd: string;
    amount_subscription_discount_per_month_pen: string;
    amount_subscription_discount_per_month_mxn: string;
    amount_subscription_discount_per_month_col: string;
    has_seo_noindex:                            boolean;
    next_learning_path:                         number | null;
    age_range_v2:                               number[];
}

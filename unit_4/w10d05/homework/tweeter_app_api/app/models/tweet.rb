class Tweet < ApplicationRecord
   validates :title, :content, :author, presence: true
   validates :title, uniqueness: true
end

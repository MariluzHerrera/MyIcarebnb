class Family < ApplicationRecord
  belongs_to :booking
  belongs_to :guest
end